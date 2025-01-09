import { Button, Card, CardBody } from "reactstrap";
import { FieldValues, UseFormWatch } from "react-hook-form";
// ** Custom Components
import { Fragment, useState } from "react";

import EmptyState from "../utils/empty-state";
import { QRCodeSVG } from "qrcode.react";

const QR_URL = (props: {
  watch: UseFormWatch<FieldValues>;
  handleDownload: (val: string) => void;
}) => {
  const { watch, handleDownload } = props;
  const defaultImg = "common/copy";
  const [src, setSrc] = useState(defaultImg);

  const copyToClipBoard = async (textField: string) => {
    if (!document.hasFocus()) {
      console.warn("Document is not focused.");
      return;
    }

    try {
      await navigator.clipboard.writeText(textField);
      setSrc("common/success-stroke");
      setTimeout(() => {
        setSrc(defaultImg);
      }, 1000);
    } catch (error) {
      console.error("Failed to write to clipboard:", error);
    }
  };
  const handleClick = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    copyToClipBoard(watch("link") as string);
  };

  return (
    <Card className="overflow-scroll">
      <CardBody>
        <h5 className="text-primary border-bottom pb-1 position-sticky top-0 zindex-4 bg-white">
          UniLink URL and QR code
        </h5>
        <h5 className="my-2 text-center">
          Click the link on your mobile device or desktop, or scan the QR code
          to simulate UniLink redirection behavior.
        </h5>
        <Fragment>
          {watch("link") ? (
            <>
              <div className="p-2 rounded border my-2 d-flex align-items-center justify-content-between">
                <a
                  href={watch("link")}
                  target="_blank"
                  className="primary"
                  rel="noreferrer">
                  {" "}
                  {watch("link")}
                </a>
                <div>
                  <img
                    src={`https://static.trackier.io/images/v2/${src}.svg`}
                    className="copy-icon cursor-pointer"
                    onClick={e => handleClick(e)}
                    width={17}
                    height={17 as number}
                  />
                </div>
              </div>
              <div className="p-2 my-1 rounded border">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="w-50 d-flex justify-content-center m-auto px-2 align-items-center">
                    <QRCodeSVG
                      id="qr-gen"
                      value={watch("link")}
                      size={150}
                      level={"H"}
                    />
                  </div>
                  <div>
                    <Button
                      className="px-1"
                      color="primary"
                      onClick={() => handleDownload("")}>
                      <i className="mdi mdi-download cursor-pointer p-0" />
                    </Button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center h-75 d-flex align-items-center justify-content-between flex-column">
              <EmptyState />
              <h3>Your UniLink hasn't been created yet</h3>
              <p className="my-0">
                Make your redirection and deep linking selections.
              </p>
              <p>
                Then click <b>Create Link</b> to create your UniLink URL and QR
                code.
              </p>
            </div>
          )}
        </Fragment>
      </CardBody>
    </Card>
  );
};
export default QR_URL;
