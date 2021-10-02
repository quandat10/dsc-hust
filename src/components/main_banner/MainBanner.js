const MainBanner = () => {
  return (
    <section className="main-banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7">
            <div
              className="banner-text wow fadeInLeft"
              data-wow-duration="1000ms"
            >
              <h2>
                We are in together <span>DSC-HUST</span>
              </h2>
              <p>Ha Noi University of Science & Technology</p>
              <form className="search-form">
                {/* <input type="text" name="search" placeholder="Search Class" /> */}
                {/* <button>
                  <i className="fa fa-search" />
                </button> */}
              </form>
            </div>
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="banner-img wow zoomIn" data-wow-duration="1000ms">
              <img src="assets/img/banner-img.png" alt="" />
            </div>
            {/*banner-img end*/}
            <div
              className="elements-bg wow zoomIn"
              data-wow-duration="1000ms"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainBanner;
