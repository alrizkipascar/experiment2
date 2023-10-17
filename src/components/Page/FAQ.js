"use client";
export default function FAQ() {
  function changeColor(evt) {
    let question = evt.target;
    const active = document.querySelector(".question.active");
    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  }
  return (
    <section className="w-[100%] h-[100%]    bg-background page-center">
      <h1 className="text-textWhite pt-20 pb-10 text-[30px] lg:text-[60px]">
        FAQs
      </h1>
      <div className="wrapper">
        <div className="container">
          <div className="question" onClick={changeColor}>
            What is our services that will help you?
          </div>
          <div className="answercont">
            <div className="answer">
              Duis occaecat cillum quis id cupidatat amet excepteur. Consequat
              aliquip dolor eu tempor proident incididunt esse ipsum aliqua
              aute. Officia et labore culpa ut eu labore. Labore proident culpa
              esse do excepteur mollit cillum elit. Laboris minim aliqua id
              pariatur aute incididunt laborum nulla fugiat laboris ullamco
              proident culpa. Ad proident non irure Lorem ex tempor enim
              adipisicing eiusmod esse aliqua. Veniam consequat dolor et
              excepteur proident dolor elit.
              <br />
              <br />
              <a href="https://blog.codepen.io/documentation/features/email-verification/#how-do-i-verify-my-email-2">
                How to Verify Email Docs
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="question" onClick={changeColor}>
            My Pen loads infinitely or crashes the browser.
          </div>
          <div className="answercont">
            <div className="answer">
              It&apos;s likely an infinite loop in JavaScript that we could not
              catch. To fix, add ?turn_off_js=true to the end of the URL (on any
              page, like the Pen or Project editor, your Profile page, or the
              Dashboard) to temporarily turn off JavaScript. When you&apos;re
              ready to run the JavaScript again, remove ?turn_off_js=true and
              refresh the page.
              <br />
              <br />
              <a href="https://blog.codepen.io/documentation/features/turn-off-javascript-in-previews/">
                How to Disable JavaScript Docs
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="question" onClick={changeColor}>
            How do I contact the creator of a Pen?
          </div>
          <div className="answercont">
            <div className="answer">
              You can leave a comment on any public Pen. Click the
              &quot;Comments&quot; link in the Pen editor view, or visit the
              Details page.
              <br />
              <br />
              <a href="https://blog.codepen.io/documentation/faq/how-do-i-contact-the-creator-of-a-pen/">
                How to Contact Creator of a Pen Docs
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="question" onClick={changeColor}>
            What version of [library] does CodePen use?
          </div>
          <div className="answercont">
            <div className="answer">
              We have our current list of library versions{" "}
              <a href="https://codepen.io/versions">here</a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="question" onClick={changeColor}>
            What are forks?
          </div>
          <div className="answercont">
            <div className="answer">
              A fork is a complete copy of a Pen or Project that you can save to
              your own account and modify. Your forked copy comes with
              everything the original author wrote, including all of the code
              and any dependencies.A fork is a complete copy of a Pen or Project
              that you can save to your own account and modify. Your forked copy
              comes with everything the original author wrote, including all of
              the code and any dependencies.A fork is a complete copy of a Pen
              or Project that you can save to your own account and modify. Your
              forked copy comes with everything the original author wrote,
              including all of the code and any dependencies.A fork is a
              complete copy of a Pen or Project that you can save to your own
              account and modify. Your forked copy comes with everything the
              original author wrote, including all of the code and any
              dependencies.
              <br />
              <br />
              <a href="https://blog.codepen.io/documentation/features/forks/">
                Learn More About Forks
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
