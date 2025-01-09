// ** Reactstrap
import { Col, Row } from "reactstrap";

import Form from "./components/form";
import QR_URL from "./components/qr-url";
import useUnilinkSimulator from "./use-unilink-simulator";

const UnilinkSimulator = () => {
    
    const { setValue, watch, control, reset, onCreate, handleDownloadQR } =
        useUnilinkSimulator();

    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                <h3 className="fw-bolder">Deep Link Simulator</h3>
            </div>
            <Row className="match-height mt-1 p-1">
                <Col lg="3">
                    <Form
                        setValue={setValue}
                        watch={watch}
                        control={control}
                        onCreate={onCreate}
                        reset={reset}/>
                </Col>
                <Col lg="9">
                    <QR_URL watch={watch} handleDownload={handleDownloadQR} />
                </Col>
            </Row>
        </>
    );
};
export default UnilinkSimulator;
