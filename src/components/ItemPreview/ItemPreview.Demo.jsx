import React from "react";
import { ItemPreview } from "./ItemPreview";

const MOCK_IMAGE_URL='https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.youloveit.com%2Fuploads%2Fposts%2F2020-06%2F1592141622_youloveit_com_frozen_2_elsa_pictures_big_hd39.jpg&imgrefurl=https%3A%2F%2Fwww.youloveit.com%2Fcartoons%2F1266-lots-of-big-and-beautiful-pictures-of-elsa-from-frozen-2-movie.html&tbnid=YOiL7UYyJnmKTM&vet=12ahUKEwjF4bvI0NPyAhUCTBoKHUrSBFsQMygDegUIARDOAQ..i&docid=el7ml6_wAAsyMM&w=1080&h=1920&q=pictures%20of&ved=2ahUKEwjF4bvI0NPyAhUCTBoKHUrSBFsQMygDegUIARDOAQ'

export const Demo = () => {
  return (
    <div>
      <ItemPreview title="Hello World" image={MOCK_IMAGE_URL} />
      <ItemPreview title="Hello World" size='m' image={MOCK_IMAGE_URL} />
      <ItemPreview title="Hello World" size="m" image={MOCK_IMAGE_URL} />
      <ItemPreview title="Hello World" starred="m" image={MOCK_IMAGE_URL} />

      <ItemPreview title="Hello WorldHello World Hello World Hello World" image={MOCK_IMAGE_URL} />
      <ItemPreview title="HThis is some helper text" />

      <ItemPreview title="Hello World" helper="This is some helper text"image={MOCK_IMAGE_URL}  />
      <ItemPreview title="Hello World" helper="This is some helper" image={MOCK_IMAGE_URL} >This is a child</ItemPreview>
    </div>
  );
};
export default Demo;
