import React, { useState } from "react";
import "../Styles/Accordion.css";
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import { BsFillArrowDownSquareFill } from 'react-icons/bs';


function Faq() {
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  const data = [
    {
      question: "Question 1",
      title: "Simply dummy text?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      question: "Question 2",
      title: "Simply dummy text?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      question: "Question 3",
      title: "Simply dummy text?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      question: "Question 4",
      title: "Simply dummy text?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      question: "Question 5",
      title: "Simply dummy text?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <>
      <div className="accordion">
        {data.map((item, i) => (
          <div key={i}>
            <div className="accordion-faq">
            <div className="accordionHeading">
              <div className="container" onClick={() => toggle(i)}>
                <h3>{item.question}</h3>
                <p>{selected === i ? <div className="icons"><BsFillArrowUpSquareFill /></div> : <div className="icons"><BsFillArrowDownSquareFill /></div>}</p>
              </div>
            </div>

            <div className="accordionContent">
              <div className={selected === i ? 'content show' : 'content'}>
                <h4>{item.title}</h4>
                <p>{item.answer}</p>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Faq;
