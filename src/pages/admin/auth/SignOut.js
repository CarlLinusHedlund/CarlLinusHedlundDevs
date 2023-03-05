import { supabase } from '../../../supabase';

export const SignOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  }
  location.reload();
};
