import React from "react";

import "./ItemCard.scss";
import "../../assets/icons/coolicons.scss";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export default function ItemCard({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let imageId = "";

  if (item.imagen) {
    let urlSplit = item.imagen.split(".");
    if (urlSplit.length > 2 && urlSplit[1] === "google") {
      if (item.imagen.includes("d/")) {
        imageId = item.imagen.split("d/")[1];
      }
      if (imageId.includes("/")) {
        const secondCutPositon = imageId.indexOf("/");
        if (secondCutPositon !== -1) {
          imageId = imageId.substring(0, secondCutPositon);
        }
      }
    }
  }

  return (
    <div className="item-card">
      <div onClick={onOpen} className="item">
        <figure className="item__img">
          <img
            src={`https://drive.google.com/uc?id=${imageId}`}
            alt={`${item.producto}_img`}
          />
        </figure>
        <div className="item__info">
          <h3 className="info__name">{item.producto}</h3>
          {item.precio1 ? (
            <p className="price">
              <span className="symbol">$</span>
              {item.precio1}
            </p>
          ) : (
            <p className="no-stock">No disponible</p>
          )}
          {item.precio2 && (
            <p className="price">
              <span className="symbol">$</span>
              {item.precio2}
            </p>
          )}
        </div>
        <div className="item__icon">
          <i className="ci-chevron_right"></i>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{ overflow: "hidden" }}>
          <ModalHeader className="heading2 modal-title">
            {item.producto}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="item-details">
              <div className="img-container">
                <img
                  src={`https://drive.google.com/uc?id=${imageId}`}
                  alt={`${item.producto}_img`}
                />
              </div>

              <div className="item-text">
                <p className="description">{item.descripcion}</p>
                <div className="prices-container">
                  {item.precio1 ? (
                    <div className="price-box">
                      <p className="price">
                        <span className="symbol">$</span>
                        {item.precio1}
                      </p>
                    </div>
                  ) : (
                    <div className="price-box">
                      <p className="no-stock">No disponible</p>
                    </div>
                  )}
                  {item.precio2 && (
                    <div className="price-box">
                      <p className="price">
                        <span className="symbol">$</span>
                        {item.precio2}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button className="button-close" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
