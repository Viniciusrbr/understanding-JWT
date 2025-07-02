import { generateSignature } from './generateSignature';

interface ISignOptions {
  data: Record<string, any>; // Data to be signed
  exp: number;               // Expiration time in seconds
  secret: string;            // Secret key used for signing
}

export function sign({ data, exp, secret }: ISignOptions) {
  // Header
  const header = {
    alg: "HS256",       // Algorithm used for signing
    typ: "JWT"          // Type of token
  };

  const base64EncodedHeader = Buffer
    .from(JSON.stringify(header))
    .toString('base64url');

  // Payload
  const payload = {
    ...data,            // Include the data to be signed
    iat: Date.now(),    // Issued at time
    exp,                // Expiration time
  };

  const base64EncodedPayload = Buffer
    .from(JSON.stringify(payload))
    .toString('base64url');

  // Signature
  const signature = generateSignature({
    header: base64EncodedHeader,
    payload: base64EncodedPayload,
    secret
  });

  return `${base64EncodedHeader}.${base64EncodedPayload}.${signature}`;
}