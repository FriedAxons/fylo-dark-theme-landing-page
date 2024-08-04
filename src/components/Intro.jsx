import Button from "./Button";
import Footer from "./Footer";

const Intro = () => {
  return (
    <div className="container">
      <img
        src="../../images/illustration-intro.png"
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

      <div className="icons-section">
        <div className="icon-box">
          <img
            src="../../images/icon-access-anywhere.svg"
            alt="Access anywhere icon"
          />
          <h2>Access your files, anywhere</h2>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div className="icon-box">
          <img src="../../images/icon-security.svg" alt="Security icon" />
          <h2>Security you can trust</h2>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
        <div className="icon-box">
          <img
            src="../../images/icon-collaboration.svg"
            alt="Collaboration icon"
          />
          <h2>Real-time collaboration</h2>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <div className="icon-box">
          <img src="../../images/icon-any-file.svg" alt="Any file icon" />
          <h2>Store any type of file</h2>
          <p>
            Whether you&apos;re sharing holidays photos or work documents, Fylo
            has you covered allowing for all file types to be securely stored
            and shared.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Intro;
