export interface Navigate {
  onClick: () => void;
}
export interface InputErrorProps {
  text?: string;
}

export interface HeroTitleProps {
  number: string;
  days: string;
  journey: string;
}

export interface SliderButtonProps {
  currentSlide: number;
  slides: { subtitle: string }[];
  onButtonClick: (idx: number) => void;
}
export interface SlideProps {
  id: number;
  bg_image: ImageData;
  date: { day: string; month: string };
  image: ImageData;
  subtitle: string;
  descr: string;
}
export interface SlidesProps {
  slides: SlideProps[];
}

export interface CareerTextListProps {
  textList: {
    subtitle: string;
    text: string;
  }[];
}

export interface CheckboxProps {
  register: any;
  errors: any;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface FormData {
  fullName: string;
  email: string;
  position?: string;
  phone?: number;
  message: string;
  checked: boolean;
}
//Hooks//
export interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

//Views//

export interface ImageData {
  src: string;
  alt: string;
}
export interface GalleryData {
  title: {
    span1: string;
    span2: string;
  };
  images: ImageData[];
  buttons: {
    back: string;
    next: string;
  };
}
