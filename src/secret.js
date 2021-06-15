import crypto from 'crypto';

export const Secrets = ((crypto) => {

  const publ = {};
  const publicKey = 'db3d754390d1bd55e04995b277b98e48';
  const privKey = 'af11492191ed59b5aae2647253bd5a2b5a665be7';
  const ts = Date.now().toString();
  const hash = crypto.createHash('md5');

  publ.publicKey = publicKey;
  publ.ts = ts;
  publ.hash = hash.update(ts + privKey + publicKey).digest('hex');

  return publ;
})(crypto);