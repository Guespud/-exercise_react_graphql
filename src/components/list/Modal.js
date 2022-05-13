import React, { Fragment } from "react";
import {
  ModalBlock,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from "./style-component.modal";
import Person from "../card/Person";

const Modal = ({
  active,
  hideModal,
  data
}) => {

  console.log(data)


  return (
    <Fragment>
      {active && (
        <ModalBlock>
          <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>{data.name} - ID {data.id} </ModalTitle>
              <ModalClose onClick={() => hideModal()}>X</ModalClose>
            </ModalHeader>
            <ModalBody>
              <Person data={data} />
            </ModalBody>
            {/* <ModalFooter>{footer}</ModalFooter> */}
          </ModalContainer>
        </ModalBlock>
      )}
    </Fragment>
  );
};
export default Modal;
