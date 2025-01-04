'use client';
import classNames from 'classnames';

export const PromoIcon = ({ isActive }: { isActive: boolean }) => (
  <svg
    width="25"
    height="24"
    className={classNames('transition-all duration-300', {
      'stroke-alpina-orange fill-alpina-orange': isActive,
      'stroke-white fill-white': !isActive,
    })}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      d="M4.15665 14.6599L2.63666 13.14C2.01666 12.52 2.01666 11.5 2.63666 10.88L4.15665 9.35996C4.41665 9.09996 4.62665 8.58995 4.62665 8.22995V6.07999C4.62665 5.19999 5.34666 4.47995 6.22666 4.47995H8.37665C8.73665 4.47995 9.24666 4.26998 9.50666 4.00998L11.0266 2.48996C11.6466 1.86996 12.6667 1.86996 13.2867 2.48996L14.8067 4.00998C15.0667 4.26998 15.5766 4.47995 15.9366 4.47995H18.0867C18.9667 4.47995 19.6866 5.19999 19.6866 6.07999V8.22995C19.6866 8.58995 19.8967 9.09996 20.1567 9.35996L21.6767 10.88C22.2967 11.5 22.2967 12.52 21.6767 13.14L20.1567 14.6599C19.8967 14.9199 19.6866 15.43 19.6866 15.79V17.94C19.6866 18.82 18.9667 19.54 18.0867 19.54H15.9366C15.5766 19.54 15.0667 19.75 14.8067 20.01L13.2867 21.53C12.6667 22.15 11.6466 22.15 11.0266 21.53L9.50666 20.01C9.24666 19.75 8.73665 19.54 8.37665 19.54H6.22666C5.34666 19.54 4.62665 18.82 4.62665 17.94V15.79C4.62665 15.42 4.41665 14.9099 4.15665 14.6599Z"
    />
    <path d="M15.1667 16C14.6067 16 14.1566 15.55 14.1566 15C14.1566 14.45 14.6066 14 15.1566 14C15.7066 14 16.1566 14.45 16.1566 15C16.1566 15.55 15.7167 16 15.1667 16Z" />
    <path d="M9.17667 10C8.61667 10 8.16666 9.55 8.16666 9C8.16666 8.45 8.61666 8 9.16666 8C9.71666 8 10.1667 8.45 10.1667 9C10.1667 9.55 9.72667 10 9.17667 10Z" />
    <path d="M9.16666 15.75C8.97666 15.75 8.78666 15.68 8.63666 15.53C8.34666 15.24 8.34666 14.7599 8.63666 14.4699L14.6367 8.46994C14.9267 8.17994 15.4067 8.17994 15.6967 8.46994C15.9867 8.75994 15.9867 9.24 15.6967 9.53L9.69666 15.53C9.54666 15.68 9.35666 15.75 9.16666 15.75Z" />
  </svg>
);
