import { Link, useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserInput } from "../../Components/FormElemets";
const CheckOut = () => {
  const { cartData } = useOutletContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-light pt-5 pb-7">
      <div className="container">
        <div className="row justify-content-center flex-md-row flex-column-reverse">
          <div className="col-md-6">
            <div className="bg-white p-4">
              <h4 className="fw-bold">1. Contact Form</h4>
              <p className="mt-4">Contact information</p>
              <form className="col-md-12" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                  <UserInput
                    id="email"
                    inputLabel="Email"
                    type="email"
                    errors={errors}
                    register={register}
                    rules={{
                      required: "Email 為必填",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Email 格式不正確",
                      },
                    }}
                  />
                </div>
                <div className="mb-2">
                  <UserInput
                    register={register}
                    type="text"
                    errors={errors}
                    id="name"
                    inputLabel="姓名"
                    rules={{
                      required: {
                        value: true,
                        message: "name is required",
                      },
                      minLength: {
                        value: 3,
                        message: "name must over then 3 words",
                      },
                      maxLength: {
                        value: 10,
                        message: "name is over than maxLength ",
                      },
                    }}
                  />
                </div>
                <div className="mb-2">
                  <UserInput
                    id="tel"
                    inputLabel="電話"
                    type="tel"
                    errors={errors}
                    register={register}
                    rules={{
                      required: "電話為必填",
                      minLength: {
                        value: 6,
                        message: "電話不少於 6 碼",
                      },
                      maxLength: {
                        value: 12,
                        message: "電話不超過 12 碼",
                      },
                    }}
                  />
                </div>

                <p className="mt-4 mb-3">Shipping address</p>
                <div className="form-row">
                  <div className="col mb-2">
                    <select id="inputState" className="form-select rounded-0">
                      <option defaultValue>Country/Region</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="col mb-2">
                    <select id="inputState" className="form-select rounded-0">
                      <option defaultValue>City</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control rounded-0 mt-1"
                  id="inputCity"
                  placeholder="Address"
                />
                <p className="mt-4 mb-2">Payment</p>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="gridRadios1"
                  >
                    WebATM
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="gridRadios2"
                  >
                    ATM
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios3"
                    value="option3"
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="gridRadios3"
                  >
                    ApplePay
                  </label>
                </div>
                <div className="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
                  <a href="./product.html" className="text-dark mt-md-0 mt-3">
                    <i className="fas fa-chevron-left me-2"></i> 繼續購物
                  </a>
                  <button
                    type="submit"
                    className="btn btn-dark py-3 px-7 rounded-0"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border p-4 mb-4">
              <h4 className="mb-4">Order Detail</h4>
              {cartData?.carts?.map((item) => {
                return (
                  <div className="d-flex" key={item.id}>
                    <img
                      src={item?.product?.imageUrl}
                      alt=""
                      className="me-2"
                      style={{
                        width: "48px",
                        height: "48px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="w-100">
                      <div className="d-flex justify-content-between fw-bold">
                        <p className="mb-0">{item?.product?.title}</p>
                        <p className="mb-0">x{item.qty}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="text-muted mb-0">
                          <small>NT${item.final_total}</small>
                        </p>
                        <p className="mb-0">NT${item.final_total}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <table className="table mt-4 border-top border-bottom text-muted">
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      className="border-0 px-0 pt-4 font-weight-normal"
                    >
                      Subtotal
                    </th>
                    <td className="text-end border-0 px-0 pt-4">
                      NT${cartData.total}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="border-0 px-0 pt-0 pb-4 font-weight-normal"
                    >
                      Payment
                    </th>
                    <td className="text-end border-0 px-0 pt-0 pb-4">
                      ApplePay
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex justify-content-between mt-4">
                <p className="mb-0 h4 fw-bold">Total</p>
                <p className="mb-0 h4 fw-bold">NT$24,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
