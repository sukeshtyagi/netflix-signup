import React, { useState } from "react";
import style from "../style/PlanForm.module.css";
import { NavLink, useNavigate } from "react-router-dom";

function PlanForm() {
  const navigate = useNavigate();

  const [selectPlanPremium, setSelectPlanPremium] = useState(false);
  const [selectPlanStandard, setSelectPlanStandard] = useState(false);
  const [selectPlanBasic, setSelectPlanBasic] = useState(false);
  const [selectPlanMobile, setSelectPlanMobile] = useState(false);
  const [amountToPay, setAmountToPay] = useState(null);
  const [plan, setPlan] = useState(null);
  const [errMsg, setErrMsg] = useState(null);

  const handlePlanPremium = () => {
    setSelectPlanPremium(true);
    setSelectPlanStandard(false);
    setSelectPlanBasic(false);
    setSelectPlanMobile(false);

    const priceElement = document.getElementById("premiumPrice");
    const priceText = priceElement.textContent.trim();
    const price = priceText.split(" ")[1];
    setAmountToPay(price);
    setPlan("Premium");
  };

  const handlePlanStandard = () => {
    setSelectPlanStandard(true);

    setSelectPlanPremium(false);
    setSelectPlanBasic(false);
    setSelectPlanMobile(false);

    const priceElement = document.getElementById("standardPrice");
    const priceText = priceElement.textContent.trim();
    const price = priceText.split(" ")[1];
    setAmountToPay(price);
    setPlan("Standard");
  };

  const handlePlanBasic = () => {
    setSelectPlanBasic(true);

    setSelectPlanPremium(false);
    setSelectPlanStandard(false);
    setSelectPlanMobile(false);

    const priceElement = document.getElementById("basicPrice");
    const priceText = priceElement.textContent.trim();
    const price = priceText.split(" ")[1];
    setAmountToPay(price);
    setPlan("Basic");
  };

  const handlePlanMobile = () => {
    setSelectPlanMobile(true);

    setSelectPlanPremium(false);
    setSelectPlanStandard(false);
    setSelectPlanBasic(false);

    const priceElement = document.getElementById("mobilePrice");
    const priceText = priceElement.textContent.trim();
    const price = priceText.split(" ")[1];
    setAmountToPay(price);
    setPlan("Mobile");
  };

  const handleButtonClick = () => {
    if (amountToPay !== null) {
      localStorage.setItem("price", amountToPay);
      localStorage.setItem("plan", plan);
      navigate("/signup/paymentPicker");
    } else {
      setErrMsg(true);
    }
  };

  return (
    <div className={style.formContainer}>
      <div className={style.contentDiv}>
        <p className={style.step}>Step 2 of 3</p>
        <h1 className={style.heading}>Choose plan that's right for you</h1>

        <div className={style.planContainer}>
          <div className={style.planDetails} onClick={handlePlanPremium}>
            <div className={style.planNamePremium}>
              <div className={style.planNameInnerDiv}>
                <p className={style.normal}>Premium</p>
                <p className={style.quality}>4k+HDR</p>
              </div>
              {selectPlanPremium && (
                <input
                  type="checkbox"
                  checked
                  className={style.planSelectedIcon}
                />
              )}{" "}
            </div>

            <div className={style.detail}>
              <p className={style.line1}>Monthly Price</p>
              <p className={style.line2} id="premiumPrice">
                &#x20B9; 649
              </p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Video and sound quality</p>
              <p className={style.line2}>Best</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Resolution</p>
              <p className={style.line2}>4K (Ultra HD) + HDR</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Spatial Audio Immersive Sound</p>
              <p className={style.line2}>Included</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Supported Devices</p>
              <p className={style.line2}>TV, computer, mobile phone, tablet</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>
                Devices your household can watch at the same time
              </p>
              <p className={style.line2}>4</p>
            </div>
            <div className={style.downloadDetail}>
              <p className={style.line1}>Download devices</p>
              <p className={style.line2}>6</p>
            </div>
          </div>

          <div className={style.planDetails} onClick={handlePlanStandard}>
            <div className={style.planNameStandard}>
              <div className={style.planNameInnerDiv}>
                <p className={style.normal}>Standard</p>
                <p className={style.quality}>1080p</p>
              </div>

              {selectPlanStandard && (
                <input
                  type="checkbox"
                  checked
                  className={style.planSelectedIcon}
                />
              )}
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Monthly Price</p>
              <p className={style.line2} id="standardPrice">
                &#x20B9; 499
              </p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Video and sound quality</p>
              <p className={style.line2}>Great</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Resolution</p>
              <p className={style.line2}>1080p(Full HD)</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Spatial Audio Immersive Sound</p>
              <p className={style.line2}>Excluded</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Supported Devices</p>
              <p className={style.line2}>TV, computer, mobile phone, tablet</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>
                Devices your household can watch at the same time
              </p>
              <p className={style.line2}>2</p>
            </div>
            <div className={style.downloadDetail}>
              <p className={style.line1}>Download devices</p>
              <p className={style.line2}>2</p>
            </div>
          </div>

          <div className={style.planDetailsBasic} onClick={handlePlanBasic}>
            {/* <p className={style.popular}>Most popular</p>*/}

            <div className={style.planNameBasic}>
              <div className={style.planNameInnerDiv}>
                <p className={style.normal}>Basic</p>
                <p className={style.quality}>720p</p>
              </div>

              {selectPlanBasic && (
                <input
                  type="checkbox"
                  checked
                  className={style.planSelectedIcon}
                />
              )}
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Monthly Price</p>
              <p className={style.line2} id="basicPrice">
                &#x20B9; 199
              </p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Video and sound quality</p>
              <p className={style.line2}>Good</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Resolution</p>
              <p className={style.line2}>720p(HD)</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Spatial Audio Immersive Sound</p>
              <p className={style.line2}>Excluded</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Supported Devices</p>
              <p className={style.line2}>
                TV, computer, mobile phone, tablet,{" "}
              </p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>
                Devices your household can watch at the same time
              </p>
              <p className={style.line2}>1</p>
            </div>
            <div className={style.downloadDetail}>
              <p className={style.line1}>Download devices</p>
              <p className={style.line2}>1</p>
            </div>
          </div>

          <div className={style.planDetails} onClick={handlePlanMobile}>
            <div className={style.planNameMobile}>
              <div className={style.planNameInnerDiv}>
                <p className={style.normal}>Mobile</p>
                <p className={style.quality}>480p</p>
              </div>
              {selectPlanMobile && (
                <input
                  type="checkbox"
                  checked
                  className={style.planSelectedIcon}
                />
              )}
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Monthly Price</p>
              <p className={style.line2} id="mobilePrice">
                &#x20B9; 149
              </p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Video and sound quality</p>
              <p className={style.line2}>Fair</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Resolution</p>
              <p className={style.line2}>480p</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Spatial Audio Immersive Sound</p>
              <p className={style.line2}>Excluded</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Supported Devices</p>
              <p className={style.line2}>Mobile phone , tablet</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>
                Devices your household can watch at the same time
              </p>
              <p className={style.line2}>1</p>
            </div>
            <div className={style.downloadDetail}>
              <p className={style.line1}>Download devices</p>
              <p className={style.line2}>1</p>
            </div>
          </div>
        </div>
        <p className={style.bottomLine1}>
          Get the best streaming experience with Netflix. Share your account
          with family members, watch on multiple devices.
        </p>
        <p className={style.bottomLine2}>
          Review our
          <NavLink className={style.navlink} to="/termsofuse">
            Terms of Use
          </NavLink>
          for more details.
        </p>
        
        <button className={style.contentDivButton} onClick={handleButtonClick}>
          Next
        </button>
        {errMsg && <p className={style.errorMessage}>Select plan to proceed</p>}
      </div>
    </div>
  );
}

export default PlanForm;
