/*
 * Copyright 2018 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import expect from 'expect.js';
import TransferTransactionSchema from '../../src/schema/TransferTransactionSchema';
import VerifiableTransactionBuilder from '../../src/transactions/VerificableTransactionBuilder';
import * as TransferTransactionBufferPackage from '../../src/buffers/TransferTransactionBuffer';
import testUtilsSpec from '../testUtils.spec';

const { TransferTransactionBuffer, MessageBuffer, MosaicBuffer } = TransferTransactionBufferPackage.default.Buffers;
const transfer = require('../../resources/request_before_sign.json');

describe('VerifiableTransaction', () => {
	let keyPair;

	before(() => {
		keyPair = {
			publicKey: 'eb6839c7e6bd0031fdd5f8cb5137e9bc950d7ee7756c46b767e68f3f58c24390',
			privateKey: '8a39b9dc5e2f15ecffdba41ffaab477857a30c9adc3993ec1721bafd0752e5cb'
		};
	});

	it('it should return a SignerFacade', () => {
		const verifiableTransaction = new VerifiableTransactionBuilder()
			.addTransaction(builder => {
				// Create message
				const payload = MessageBuffer.createPayloadVector(builder, transfer.message.payload);
				MessageBuffer.startMessageBuffer(builder);
				MessageBuffer.addType(builder, transfer.message.type);
				MessageBuffer.addPayload(builder, payload);
				const message = MessageBuffer.endMessageBuffer(builder);

				// Create mosaics
				const mosaics = [];
				transfer.mosaics.forEach(mosaic => {
					const id = MosaicBuffer.createAmountVector(builder, mosaic.id);
					const amount = MosaicBuffer.createAmountVector(builder, mosaic.amount);
					MosaicBuffer.startMosaicBuffer(builder);
					MosaicBuffer.addId(builder, id);
					MosaicBuffer.addAmount(builder, amount);
					mosaics.push(MosaicBuffer.endMosaicBuffer(builder));
				});

				// Create vectors
				const signatureVector = TransferTransactionBuffer.createSignatureVector(builder, Array(...Array(64))
					.map(Number.prototype.valueOf, 0));
				const signerVector = TransferTransactionBuffer.createSignerVector(builder, transfer.signer);
				const deadlineVector = TransferTransactionBuffer.createDeadlineVector(builder, transfer.deadline);
				const feeVector = TransferTransactionBuffer.createFeeVector(builder, transfer.fee);
				const recipientVector = TransferTransactionBuffer.createRecipientVector(builder, transfer.recipient);
				const mosaicsVector = TransferTransactionBuffer.createMosaicsVector(builder, mosaics);


				TransferTransactionBuffer.startTransferTransactionBuffer(builder);
				TransferTransactionBuffer.addSize(builder, 149 + (16 * transfer.mosaics.length) + transfer.message.payload.length);
				TransferTransactionBuffer.addSignature(builder, signatureVector);
				TransferTransactionBuffer.addSigner(builder, signerVector);
				TransferTransactionBuffer.addVersion(builder, transfer.version);
				TransferTransactionBuffer.addType(builder, transfer.type);
				TransferTransactionBuffer.addFee(builder, feeVector);
				TransferTransactionBuffer.addDeadline(builder, deadlineVector);
				TransferTransactionBuffer.addRecipient(builder, recipientVector);
				TransferTransactionBuffer.addNumMosaics(builder, transfer.mosaics.length);
				TransferTransactionBuffer.addMessageSize(builder, transfer.message.payload.length + 1);
				TransferTransactionBuffer.addMessage(builder, message);
				TransferTransactionBuffer.addMosaics(builder, mosaicsVector);


				// Calculate size

				const codedTransfer = TransferTransactionBuffer.endTransferTransactionBuffer(builder);
				builder.finish(codedTransfer);
			})
			.addSchema(TransferTransactionSchema)
			.build();

		const signedTx = verifiableTransaction.signTransaction(keyPair, testUtilsSpec.generationHash);
		expect(signedTx.payload.substring(
			240,
			signedTx.payload.length
		)).to.be.equal('90E8FEBD671DD41BEE94EC3BA5831CB608A312C2F203BA84AC020001000029CF5FD941AD25D58096980000000000');
	});
});
