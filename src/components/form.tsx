//  ** Constants
import {
  ANDROID_OPTIONS,
  DESKTOP_OPTIONS,
  IOS_OPTIONS,
  PRODUCT_OPTIONS,
  QUANTITY_OPTIONS
} from "../utils/constants";
// ** Reactstrap
import { Button, ButtonGroup, Card, CardBody, Input, Label } from "reactstrap";

// ** Custom Components
import { IFormProps } from "../utils/unilink-simulator.type";
import classnames from "classnames";

const Form = (props: IFormProps) => {
  const { setValue, watch, control, onCreate, reset } = props;
  return (
    <Card className="overflow-scroll">
      <CardBody>
        <h5 className="text-primary border-bottom pb-1">
          {"Deep link users with app installed"}
        </h5>
        {/* PRODUCT_SELECTION */}
        <Label>
          {"Open a specific page in the app"}
          <>
            <i
              className="mdi mdi-information-outline ms-1"
              id={"product-info"}
            />
          </>
        </Label>
        <div className="d-flex align-items-center justify-content-between">
          <ButtonGroup className="w-max">
            {PRODUCT_OPTIONS.map((item, index) => (
              <Button
                color="info"
                key={index}
                onClick={() => setValue("product", item.value as string)}
                active={watch("product") === item.value}
                outline={watch("product") !== item.value}>
                {item.label}
              </Button>
            ))}
          </ButtonGroup>
        </div>
        <small className="text-muted">
          The specific page displays in the link as the "product" parameter.
        </small>
        <br />
        {/* QUANTITY_SELECTION */}
        <Label className="mt-2">Display the amount</Label>

        <Input
          type="select"
          id="select-basic"
          name="quantity"
          value={watch("quantity")}
          onChange={e => setValue("quantity", e.target.value)}>
          <option value={""}>Select</option>
          {QUANTITY_OPTIONS.map(item => (
            <option value={item.value} key={item.value}>
              {item.label}
            </option>
          ))}
        </Input>
        <small className="text-muted">
          The amount displays in the link as the "quantity" parameter.
        </small>
        {/* <Select
          className="w-100 mb-1"
          id="quantity"
          name={"quantity"}
          errors={{}}
          control={control}
          isClearable
          label="Display the amount"
          tooltipContent={
            'The amount displays in the link as the "quantity" parameter.'
          }
          options={QUANTITY_OPTIONS}
        /> */}

        <hr />
        <h5 className="text-primary">
          {"Redirect users without app installed"}
        </h5>
        <hr />
        {/* IOS_R_SELECTION */}
        <Label>{"On iOS, redirect to:"}</Label>
        <br />
        <ButtonGroup className="rounded-pill bg-gray border my-75">
          {IOS_OPTIONS.map((item, index) => (
            <Button
              className={classnames("rounded-pill border-0", {
                "bg-success": watch("ios_r") === item.value,
                "bg-gray": watch("ios_r") !== item.value
              })}
              onClick={() => setValue("ios_r", item.value as string)}
              key={index}
              color="">
              {item.label as string}
            </Button>
          ))}
        </ButtonGroup>
        <br />
        {/* ANDROID_R_SELECTION */}
        <Label>{"On Android, redirect to:"}</Label>
        <br />
        <ButtonGroup className="rounded-pill bg-gray border my-75">
          {ANDROID_OPTIONS.map((item, index) => (
            <Button
              className={classnames("rounded-pill border-0", {
                "bg-success": watch("android_r") === item.value,
                "bg-gray": watch("android_r") !== item.value
              })}
              onClick={() => setValue("android_r", item.value as string)}
              key={index}
              color="">
              {item.label as string}
            </Button>
          ))}
        </ButtonGroup>
        <br />

        {/* WEB_R_SELECTION */}
        <Label>{"On desktop, redirect to:"}</Label>
        <br />
        <ButtonGroup className="rounded-pill bg-gray border my-75">
          {DESKTOP_OPTIONS.map((item, index) => (
            <Button
              className={classnames("rounded-pill border-0", {
                "bg-success": watch("web_r") === item.value,
                "bg-gray": watch("web_r") !== item.value
              })}
              onClick={() => setValue("web_r", item.value as string)}
              key={index}
              color="">
              {item.label as string}
            </Button>
          ))}
        </ButtonGroup>
        <br />
        <div className="mt-2 d-flex justify-content-center align-items-center">
          <Button
            outline
            color="secondary"
            className="w-100 me-50"
            onClick={() => reset()}>
            {"RESET"}
          </Button>
          <Button
            color="info"
            className="w-100 ms-50"
            onClick={() => onCreate()}>
            {"CREATE"}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
export default Form;
