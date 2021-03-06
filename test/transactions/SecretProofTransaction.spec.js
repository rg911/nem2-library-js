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

import { sha3_256 } from 'js-sha3';
import expect from 'expect.js';
import SecretProofTransaction from '../../src/transactions/SecretProofTransaction';
import deadline from '../../src/transactions/Deadline';
import { HashAlgorithm } from '../../src/coders/hashAlgorithm';
import testUtilsSpec from '../testUtils.spec';

describe('SecretProofTransaction', () => {
	const keyPair = {
		publicKey: '9a49366406aca952b88badf5f1e9be6ce4968141035a60be503273ea65456b24',
		privateKey: '041e2ce90c31cd65620ed16ab7a5a485e5b335d7e61c75cd9b3a2fed3e091728'
	};

	it('should create secret lock transaction', () => {
		const hash = sha3_256.create();
		hash.update('secret');
		const secretProofTransaction = {
			deadline: deadline(),
			hashAlgorithm: HashAlgorithm.SHA3_256,
			secret: hash.hex(),
			recipient: 'SDUP5PLHDXKBX3UU5Q52LAY4WYEKGEWC6IB3VBFM',
			proof: '9a493664'
		};
		const verifiableTransaction = new SecretProofTransaction.Builder()
			.addDeadline(secretProofTransaction.deadline)
			.addHashAlgorithm(secretProofTransaction.hashAlgorithm)
			.addSecret(secretProofTransaction.secret)
			.addRecipient(secretProofTransaction.recipient)
			.addProof(secretProofTransaction.proof)
			.build();

		const transactionPayload = verifiableTransaction.signTransaction(keyPair, testUtilsSpec.generationHash);
		expect(transactionPayload.payload.substring(
			240,
			transactionPayload.payload.length
	)).to.be.equal('00F5A5207A8729B1F709CB710311751EB2FC8ACAD5A1FB8AC991B736E69B6529A390E8FEBD671DD41BEE94EC3BA5831CB608A312C2F203BA84AC04009A493664');
	});
});
