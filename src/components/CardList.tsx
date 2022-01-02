/* eslint-disable react/jsx-no-bind */
import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards?: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState('');

  function viewImage(url: string): void {
    setSelectedImage(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={3} gap="40px">
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={viewImage} />
        ))}
        <ModalViewImage
          isOpen={isOpen}
          onClose={onClose}
          imgUrl={selectedImage}
        />
      </SimpleGrid>
    </>
  );
}
