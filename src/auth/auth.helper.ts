import {apiSpTrans} from '../api/api';

export async function Authenticate() {
  await apiSpTrans.post(
    'Login/Autenticar?token=7fc0bb36d1d3fff64efe266cb9dd3ab4dcd6b97b30685a0029800208bb6c274a',
  );
}
