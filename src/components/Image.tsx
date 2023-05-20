import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  size: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, size }) => {
  return (
    <img src={src} alt={alt} className={`w-${size} h-${size} object-cover rounded`} />
  );
};

export default Image;

// Este componente Image aceita três props: src, alt e size. src é o URL da imagem que você deseja exibir, alt é o texto alternativo
// que será exibido se a imagem não puder ser carregada e size é o tamanho da imagem.

// Lembre-se que o tamanho deve ser um número e corresponder a uma das classes de tamanho do Tailwind (por exemplo, 16 para w-16 e h-16).

// No entanto, deve-se notar que as classes do Tailwind para largura e altura (w-{size} e h-{size}) não aceitam diretamente variáveis
// como argumentos. Nesse caso, você pode criar diferentes classes para diferentes tamanhos, se necessário. Ou usar a propriedade style
// para ajustar o tamanho da imagem.
