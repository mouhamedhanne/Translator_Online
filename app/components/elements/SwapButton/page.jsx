"use client";

const SwapButton = ({ onSwap }) => {
  return (
    <div className="swap-position">
      <ion-icon
        name="swap-horizontal-outline"
        onClick={onSwap}
        class="text-primary-color cursor-pointer"
      ></ion-icon>
    </div>
  );
};

export default SwapButton;
