import React, { useState } from "react";
import "../Faq/Faq.css";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import FaqImg from "../../Images/FaqImg.png";
import Navbar from "../../Components/Navbar/Navbar";
import authService from "../../Services/auth-services";
import NavAdmin from "../../Components/Navbar/NavAdmin";
import Scroll from "../../Components/Scroll/Scroll";

function Faq() {
  const [selected, setSelected] = useState(null);
  const user = authService.getCurrentUser();
  let auth = false
  if (user) {
    auth = true
  }
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  
      

  const data = [
    {
      question: "Bagaimana cara mengisi saldo BishaPay?",
      title: "Pengisian saldo bishapay?",
      answer:
        "Pengisian saldo bishapay bisa melalui ATM/bank trasnfer atau bisa melalui e-wallet lain yang sudah bekerja sama dengan bishapay, jadi kamu tidak usah khawatir jika saldomu habis.",
    },
    {
      question: "Apa itu BishaPay?",
      title: "Apa itu BishaPay?",
      answer:
        "Bishapay merupakan aplikasi penyedia layanan loyalty program kepada user untuk memberikan kemudahan dan keuntungan dalam setiap transaksi, ada banyak hal yang bisa dilakukan lo di bishapay, yuk download.",
    },
    {
      question: "Fitur-fitur BishaPay?",
      title: "Fitur-fitur BishaPay?",
      answer:
        "Tentu aja dong, di bishapay kamu bisa transfer ke semua orang tanpa batasan tanpa hambatan, transfer dimanapun kapanpun.",
    },
    {
      question: "Apa saja media sosial BishaPay",
      title: "Media sosial BishaPay?",
      answer:
        "Ya, bishapay 100% gratis dan bisa kamu unduh lewat Google play store atau apps store, kamupun bisa ningkatin level loyalitas kamu pada saat sudah mengunduh dan menggunakan bishapay.",
    },
    {
      question: "Customer Service BishaPay?",
      title: "Customer Service?",
      answer:
        "Kamu bisa menghubungi Customer service yang ada di laman web atau di aplikasi bisaphay, mudah kok dan pastinya cepet banget penangananya.",
    },
  ];
  
  return (
    <>
    <Scroll />
      {
          auth ? (
            <NavAdmin/>
          ) : (
            <Navbar/>
          )
        }
      <div className="headerFaq">
        <h1 className="faq">FAQ</h1>
        <p>
        Pertanyaan tentang BishaPay
        </p>
      </div>

      <Container>
        <Row className="rowFaq">
          <Col>
            <div className="accordion">
              {data.map((item, i) => (
                <div key={i}>
                  <div className="accordionFaq">
                    <div className="accordionHeading">
                      <div className="containerFaq" onClick={() => toggle(i)}>
                        <h3>{item.question}</h3>
                        <p>
                          {selected === i ? (
                            <div className="icons">
                              <BsFillArrowUpSquareFill />
                            </div>
                          ) : (
                            <div className="icons">
                              <BsFillArrowDownSquareFill />
                            </div>
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="accordionContent">
                      <div
                        className={selected === i ? "content show" : "content"}
                      >
                        <h4>{item.title}</h4>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          <Col>
            <div className="faqImg">
              <img src={FaqImg} alt="FaqImg"></img>
            </div>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default Faq;
