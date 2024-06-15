import { useState } from 'react';
import { z } from 'zod';

// TODO: regex 별도 파일로 분리?
const accountNumberRegex = /^[0-9][0-9-]*[0-9]$/;
const schema = z.object({
  accountNumber: z.string().regex(accountNumberRegex).min(1),
  description: z.string(),
  isPublic: z.boolean(),
});
const CreateWishListPage: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  const handleCreateWishList = async () => {
    try {
      await createWishList({ name, description, isPublic });
      // Redirect to the wish list page
    } catch (error) {
      console.error(error);
    }
  };

  return <div></div>;
};
