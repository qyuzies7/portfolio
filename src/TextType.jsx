import { useEffect, useState } from "react";

import "./TextType.css";


function TextType({
  text = [],

  typingSpeed = 55,

  pauseDuration = 4000,

  showCursor = false,

  cursorCharacter = "▎",

  deletingSpeed = 75,
}) {

  const [textIndex, setTextIndex] =
    useState(0);

  const [displayText, setDisplayText] =
    useState("");

  const [isDeleting, setIsDeleting] =
    useState(false);


  useEffect(() => {

    if (!text.length) return;


    const currentText =
      text[textIndex];


    let timeout;


    /* =========================
       TYPING
    ========================= */

    if (!isDeleting) {

      if (
        displayText.length <
        currentText.length
      ) {

        timeout = setTimeout(() => {

          setDisplayText(
            currentText.substring(
              0,
              displayText.length + 1
            )
          );

        }, typingSpeed);

      }

      else {

        timeout = setTimeout(() => {

          setIsDeleting(true);

        }, pauseDuration);

      }

    }


    /* =========================
       DELETING
    ========================= */

    else {

      if (displayText.length > 0) {

        timeout = setTimeout(() => {

          setDisplayText(
            currentText.substring(
              0,
              displayText.length - 1
            )
          );

        }, deletingSpeed);

      }

      else {

        setIsDeleting(false);

        setTextIndex(
          (prev) =>
            (prev + 1) %
            text.length
        );

      }

    }


    return () =>
      clearTimeout(timeout);

  }, [
    displayText,
    isDeleting,
    textIndex,
    text,
    typingSpeed,
    pauseDuration,
    deletingSpeed,
  ]);


  return (

    <span className="text-type">

      {displayText}

      {showCursor && (

        <span className="text-type-cursor">

          {cursorCharacter}

        </span>

      )}

    </span>

  );
}


export default TextType;