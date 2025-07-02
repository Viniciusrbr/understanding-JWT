import { createHmac } from 'node:crypto';

interface ISignOptions {
  data: Record<string, any>; // Data to be signed
  exp: number;               // Expiration time in seconds
  secret: string;            // Secret key used for signing
}

export function sign(options: ISignOptions){
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
    ...options.data,    // Include the data to be signed
    iat: Date.now(),    // Issued at time
    exp: options.exp,   // Expiration time
  };

  const base64EncodedPayload = Buffer
    .from(JSON.stringify(payload))
    .toString('base64url');

  // Signature
  const hmac = createHmac('sha256', options.secret);
  const signature = hmac.update(
    `${base64EncodedHeader}.${base64EncodedPayload}`)
    .digest('base64url');
    
  
  return `${base64EncodedHeader}.${base64EncodedPayload}.${signature}`;
}