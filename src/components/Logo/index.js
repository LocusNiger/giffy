import giffyLogo from "../../assets/Giffy-logo-black.png";

export default function Logo() {
  return (
    <div>
      <div className="max-h-max lg:mt-6">
        <img className="max-w-xs w-40 hover:cursor-pointer" alt="Giffy logo" src={giffyLogo} />
      </div>
    </div>
  );
}
