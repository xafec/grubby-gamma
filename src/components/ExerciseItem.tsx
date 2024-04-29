import { IconChevronRight, IconX } from "@tabler/icons-react";
import { useState } from "react";

export default function ExerciseItem({
  number,
  question,
  answer,
  questionImage,
  answerImage,
}: {
  number: number;
  question: string;
  answer: string;
  questionImage?: string;
  answerImage?: string;
}) {
  const [showModal, setShowModal] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const changeShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <article className="relative bg-white/5 border-2 border-white/20 hover:bg-white/10 rounded-md p-4">
      {questionImage && (
        <button
          onClick={() => {
            setShowModal(true);
            setModalImage(questionImage);
          }}
        >
          <img
            src={questionImage}
            alt="question image"
            className="mb-2 rounded-md cursor-pointer"
            loading="lazy"
            decoding="async"
          />
        </button>
      )}
      <h3 className="text-lg font-bold">
        Задача {number}: {question}
      </h3>
      {answer && (
        <button
          onClick={() => changeShowAnswer()}
          className="group text-sm text-white/50 font-medium hover:text-white"
        >
          <span className="flex items-center">
            {showAnswer ? "Скрыть ответ" : "Показать ответ"}
            <IconChevronRight
              stroke={2.5}
              className="h-full w-4 overflow-visible transition-all ml-1 group-hover:ml-2"
            />
          </span>
        </button>
      )}

      {/* Модальное окно для изображения */}
      {showModal && modalImage && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center mx-auto md:px-5">
          <div className="relative bg-white/20 md:p-9 rounded-md">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 bg-white/20 p-1 rounded-full"
            >
              <IconX stroke={2} className="h-6 w-6 font" />
            </button>
            <img
              src={modalImage}
              alt="answer"
              className="max-w-full max-h-[80vh]"
            />
          </div>
        </div>
      )}

      {/* Окно для ответа */}
      {showAnswer && (
        <div className="mt-4 bg-white/20 p-4 rounded-md">
          <p>{answer}</p>
          {answerImage && (
            <button
              onClick={() => {
                setShowModal(true);
                setModalImage(answerImage);
              }}
            >
              <img
                src={answerImage}
                alt="Answer"
                className="mt-2 rounded-md"
                loading="lazy"
                decoding="async"
              />
            </button>
          )}
        </div>
      )}
    </article>
  );
}
