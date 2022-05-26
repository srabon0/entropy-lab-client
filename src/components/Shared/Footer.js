import React from "react";
import labjar from "../../assets/icons8-round-bottom-flask-48.png"
const Footer = () => {
  return (
    <footer class="footer p-10 bg-primary text-base-content">
    <div className="text-white flex">
        <img className="w-10" src={labjar} alt="" />
    <p className="text-2xl">EntropyLab Industries Ltd.
    <br />
    <span className="text-sm">Providing reliable tech since 1992</span>
    </p>
    
  </div>
      <div className="text-white">
        <span class="font-lg text-white">Services</span>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </div>
      <div className="text-white">
        <span class="font-lg text-white">Company</span>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </div>
      <div className="text-white">
        <span class="font-lg text-white">Legal</span>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </div>
      <div className="text-white">
        <span class="font-lg text-white">Newsletter</span>
        <div class="form-control text-white w-80">
          <label class="label">
            <span class="label-text text-white">Enter your email address</span>
          </label>
          <div class="relative">
            <input
              type="text"
              placeholder="username@site.com"
              class="input input-bordered w-full pr-16"
            />
            <button class="btn btn-primary btn-outline absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
