import { useEffect, useState } from "react";

interface useImageProps {
  filename: string;
}

const useImage = ({ filename }: useImageProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`../assets/${filename}`); // change relative path to suit your needs
        setImage(response.default);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [filename]);

  return {
    loading,
    error,
    image,
  };
};

export default useImage;
