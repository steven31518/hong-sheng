import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const CouponModal = ({ closeModal, getCoupons, type, tempCoupon }) => {
  const [tempData, setTempData] = useState({
    title: "",
    is_enabled: 1,
    percent: 80,
    due_date: 1555459200,
    code: "testCode",
  });

  useEffect(() => {
    if (type === "create") {
      setTempData({
        title: "",
        is_enabled: 1,
        percent: 80,
        due_date: 1555459200,
        code: "testCode",
      });
    } else if (type === "edit") {
      setTempData(tempCoupon);
    }
    console.log(type, tempCoupon);
  }, [type, tempCoupon]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (["price", "origin_price"].includes(name)) {
      setTempData({ ...tempData, [name]: Number(value) });
    } else if (name === "is_enabled") {
      setTempData({ ...tempData, [name]: +e.target.checked }); //boolean
    } else {
      setTempData({ ...tempData, [name]: value });
    }
  };

  const submit = async () => {
    let api = `/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupon`;
    let method = "post";
    if (type === "edit") {
      api = `/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupon/${tempCoupon.id}`;
      method = "put";
    }
    try {
      const res = await axios[method](api, { data: tempData });
      console.log(res);
      closeModal();
      getCoupons();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className="modal fade"
        id="productModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {type === "create"
                  ? "建立新優惠劵"
                  : `編輯優惠劵: ${tempCoupon.title}`}
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-2">
                <label className="w-100" htmlFor="title">
                  標題
                  <input
                    type="text"
                    id="title"
                    placeholder="請輸入標題"
                    name="title"
                    className="form-control mt-1"
                    value={tempData.title}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="row">
                <div className="col-md-6 mb-2">
                  <label className="w-100" htmlFor="percent">
                    折扣（%）
                    <input
                      type="text"
                      name="percent"
                      id="percent"
                      placeholder="請輸入折扣（%）"
                      className="form-control mt-1"
                      value={tempData.percent}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className="col-md-6 mb-2">
                  <label className="w-100" htmlFor="due_date">
                    到期日
                    <input
                      type="date"
                      id="due_date"
                      name="due_date"
                      placeholder="請輸入到期日"
                      className="form-control mt-1"
                    />
                  </label>
                </div>
                <div className="col-md-6 mb-2">
                  <label className="w-100" htmlFor="code">
                    優惠碼
                    <input
                      type="text"
                      id="code"
                      name="code"
                      placeholder="請輸入優惠碼"
                      className="form-control mt-1"
                      value={tempData.code}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
              <label className="form-check-label" htmlFor="is_enabled">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  id="is_enabled"
                  name="is_enabled"
                  value={tempData.is_enabled}
                  onChange={handleChange}
                />
                是否啟用
              </label>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={submit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CouponModal;
