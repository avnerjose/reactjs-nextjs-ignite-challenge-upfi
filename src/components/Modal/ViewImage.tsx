import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  Flex,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bgColor="pGray.800"
        maxW="min(100vw,900px)"
        maxH="min(100vh,600px)"
        w="auto"
        h="auto"
      >
        <ModalBody p={0} borderTopRadius="md">
          <Image src={imgUrl} borderTopRadius="md" objectFit="cover" w="max" />
        </ModalBody>
        <ModalFooter bgColor="pGray.800" borderBottomRadius="md">
          <Link href={imgUrl} target="_blank" mr="auto">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
