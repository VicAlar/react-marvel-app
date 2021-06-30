import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  ContainerComic,
  ComicImg,
  Title,
  Item,
  Description,
} from "./ComicElements";

const Comic = () => {
  const comicInfo = useSelector((state) => state.personajes.comicSelect);
  const history = useHistory();

  window.onload = (event) => {
    const e = event || window.event;
    e.preventDefault();
    if (e) {
      history.push('/');
    }
  };

  let fecha = comicInfo.dates.find((o) => o.type === "onsaleDate");

  let newDate = fecha.date.substr(0, 10);

  const writer = comicInfo.creators.items.find((o) => o.role === "writer");

  const penciler = comicInfo.creators.items.find((o) => o.role === "penciler");

  const inker = comicInfo.creators.items.find((o) => o.role === "inker");

  return (
    <ContainerComic>
      <ComicImg
        imgurl={`${comicInfo.thumbnail.path.replace("http", "https")}.${
          comicInfo.thumbnail.extension
        }`}
      />
      <div>
        <Title>{comicInfo.title}</Title>
        <Item>Published: {newDate}</Item>
        <Item>Writter: {writer.name}</Item>
        <Item>Penciler: {penciler ? penciler.name : "Unknow information"}</Item>
        <Item>Cover Artist: {inker ? inker.name : "Unknow information"}</Item>
        <Description>{comicInfo.description}</Description>
      </div>
    </ContainerComic>
  );
};

export default Comic;
