import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const lusitana = Lusitana({
  weight: '400', // Weight property is required
  subsets: ['latin'],
  // Other optional properties can be added here
}); 
export const inter = Inter({ subsets: ['latin'] });
