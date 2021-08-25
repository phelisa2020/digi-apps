import React from 'react';
import styled from 'styled-components'
import { ButtonBase} from '@material-ui/core'
import {useDropzone} from 'react-dropzone'
import { CameraAlt as CameraIcon } from '@material-ui/icons'

import { useCreatePhoto } from './CreatePhoto.useCreatePhoto';
import { ALERTS } from './CreatePhoto.constants';
import { Layout } from '../../../components/Layout';
// import { Input } from '../../../components/Input';
import { Text }  from '../../../components/Text';
import tokens from '../../../data/tokens';

const InputWrap = styled.div`
  padding: ${tokens.spacing.l} 0;
`

const Image = styled(ButtonBase)`
height: ${tokens.images.l};
width: ${tokens.images.l};
border-radius: ${tokens.radius.strong};
background-position: 50% 50%;
background-size: cover;
background-image: ${({ imageUrl }) => imageUrl ? `url('${imageUrl}')` : 'none' };
background-color: rgba(${tokens.colors.black}, ${({ isDragging }) => tokens.opacity
[isDragging ? 'subtle' : 'subtler']});
tokens.opacity[isDragging ? 'subtle' : 'subtler']});
box-shadow: 0px 3px 1px -2px rgba(0 0 0 /20%), 0px 2px 2px 0px rgba(0 0 0 / 14%), 0px 1px 5px
0px rgb(0 0 0 /12%);



&:hover {
 ${({ hasHover }) =>  !hasHover ? "" :  `background-color: rgba(
    ${tokens.colors.black}, ${tokens.opacity.subtle})`} 
}
`;

const Camera = styled(CameraIcon)`
position: absolute;
width: ${tokens.images.s};
height: ${tokens.images.s};
opacity: ${tokens.opacity.strong}
`
    
export const CreatePhoto = () => {
       const { image, uploadImage, alert, save, phase, edit, cancel } = useCreatePhoto();
       const { getRootProps, getInputProps, isDragActive, open } = useDropzone( {onDrop: uploadImage });

if ( phase === 'display') {
   return ( <Layout
   title='Photo'
   form
    primary={['Save', save]}
    secondary={['Change Photo', edit]}
    alert={ALERTS[alert]}
    >
        <Text size="m">Provide a photo or image to be associated with this account.</Text>
       
       <InputWrap>
        <Image image={image} />
       </InputWrap>
      </Layout>
   )    
}

    return (
    <Layout
     title='Photo'
     form
      primary={['Add Photo', () => open()]}
      secondary={['Back', '/']}
      alert={ALERTS[alert]}
      >

        <Text size="m">Provide a photo or image to be associated with this account.</Text>

         <InputWrap>
        <Image hasHover {...getRootProps()} isDragActive={isDragActive} image={image}>
           <Camera />
          <input {...getInputProps()}  />
  
           </Image>
        </InputWrap>
        </Layout>
  );
};

export default CreatePhoto;