import Button from "./Button";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import EmailSignup from "./EmailSignup";

const Intro = () => {
  return (
    <div className="container">
      <img
        src="/public/images/illustration-intro.png"
        alt="Illustration"
        className="firstIntroIllustration"
      />
      <h1 className="firstHeader">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="firstHeaderSubText">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <Button text="Get Started" />

      <img
        src="/public/images/bg-curvy-desktop.svg"
        alt="Curvy background image"
        className="background-image desktop-only"
      />
      <img
        src="/public/images/bg-curvy-mobile.svg"
        alt="Curvy background image"
        className="background-image mobile-only"
      />

      <div className="icons-section">
        <div className="icon-box icon-box-1">
          <img
            src="/public/images/icon-access-anywhere.svg"
            alt="Access anywhere icon"
          />
          <h2>Access your files, anywhere</h2>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div className="icon-box icon-box-2">
          <img src="/public/images/icon-security.svg" alt="Security icon" />
          <h2>Security you can trust</h2>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
        <div className="icon-box icon-box-3">
          <img
            src="/public/images/icon-collaboration.svg"
            alt="Collaboration icon"
          />
          <h2>Real-time collaboration</h2>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <div className="icon-box icon-box-4">
          <img src="/public/images/icon-any-file.svg" alt="Any file icon" />
          <h2>Store any type of file</h2>
          <p>
            Whether you&apos;re sharing holidays photos or work documents, Fylo
            has you covered allowing for all file types to be securely stored
            and shared.
          </p>
        </div>
      </div>
      <div className="productive-section">
        <img
          src="/public/images/illustration-stay-productive.png"
          alt="Stay productive image"
        />
        <div className="productive-section-text">
          <h1 className="productive-section-header">
            Stay productive, wherever you are
          </h1>
          <p className="productive-section-paragraph">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs. <br />
            <br /> Securely share files and folders with friends, family and
            colleagues for live collaboration. No email attachments required.{" "}
            <br />
            <br />
            <span className="productive-link-text">
              See how Fylo works
              <img
                src="/public/images/icon-arrow.svg"
                alt="Arrow icon"
                className="productive-link-text-icon normal-icon"
              />
              <img
                src="/public/images/icon-arrow-white.svg"
                alt="White arrow icon"
                className="productive-link-text-icon white-icon"
              />
            </span>
          </p>
        </div>
      </div>
      <Testimonials />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default Intro;
