import debounce from './debounce.tsx';

type EventParams = MouseEvent | TouchEvent;

export class SlideClass {
  // Tipagem dos atributos da class
  slideItem: HTMLUListElement | null;
  slideWrapper: HTMLDivElement | null;
  slideArray: { element: HTMLElement; position: number }[];
  dist: {
    finalPosition: number;
    startX: number;
    movement: number;
    movePosition: number;
  };
  activeClass: string;
  changeEvent: Event;
  lengthSlideArray: number;
  indexObject: {
    prev: number | null;
    active: number | null;
    next: number | null;
  };

  constructor(slideItem: string, slideWrapper: string) {
    this.slideItem = document.querySelector(slideItem);
    this.slideWrapper = document.querySelector(slideWrapper);
    this.slideArray = [];
    this.dist = {
      finalPosition: 0,
      startX: 0,
      movement: 0,
      movePosition: 0,
    };
    this.activeClass = 'active';
    this.lengthSlideArray = 0;
    this.indexObject = {
      prev: null,
      active: null,
      next: null,
    };

    // Criação de um novo evento que auxiliará na sincronização da paginação do slide em sua diferentes formas: controles e movimento de cada imagem
    this.changeEvent = new Event('changeEvent');
  }

  transition(active: boolean) {
    if (this.slideItem instanceof HTMLUListElement)
      this.slideItem.style.transition = active ? 'transform .3s' : '';
  }

  moveSlide(distX: number) {
    this.dist.movePosition = distX;
    if (this.slideItem instanceof HTMLUListElement)
      this.slideItem.style.transform = `translate3d(${distX}px, 0px, 0px)`;
  }

  updatePosition(clientX: number) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalPosition - this.dist.movement;
  }

  onStart(event: EventParams) {
    let movetype: string;
    if (event.type === 'mousedown') {
      event.preventDefault();
      // O clientX é uma propriedade de leitura da interface MouseEvent que fornece as coordenadas horizontais dentro da área do aplicativo
      this.dist.startX = (event as MouseEvent).clientX;
      movetype = 'mousemove';
    } else {
      this.dist.startX = (event as TouchEvent).changedTouches[0].clientX;
      movetype = 'touchmove';
    }
    this.slideWrapper?.addEventListener(movetype, () => this.onMove);
    this.transition(false);
  }

  onMove(event: EventParams) {
    const pointerPosition =
      event.type === 'mousemove'
        ? (event as MouseEvent).clientX
        : (event as TouchEvent).changedTouches[0].clientX;
    const finalPosition = this.updatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  onEnd(event: EventParams) {
    const movetype = event.type === 'mouseup' ? 'mousemove' : 'touchmove';
    this.slideWrapper?.removeEventListener(movetype, this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
    this.transition(true);
    this.changeSlideonEnd();
  }

  changeSlideonEnd() {
    if (this.dist.movement > 120 && this.indexObject.next !== undefined) {
      this.activeNextSlide();
    } else if (
      this.dist.movement < 120 &&
      this.indexObject.prev !== undefined
    ) {
      this.activePrevSlide();
    } else {
      if (this.indexObject.active) this.changeSlide(this.indexObject.active);
    }
  }

  addEventSlide() {
    this.slideWrapper?.addEventListener('mousedown', this.onStart);
    this.slideWrapper?.addEventListener('touchstart', this.onStart);
    this.slideWrapper?.addEventListener('mouseup', this.onEnd);
    this.slideWrapper?.addEventListener('touchend', this.onEnd);
  }

  slidePosition(slide: HTMLElement) {
    if (!(slide instanceof HTMLElement)) {
      throw new Error('O parâmetro slide deve ser um HTMLElement');
    }

    const wrapperOffSetWidth: number = this.slideWrapper?.offsetWidth ?? 0;
    const margin = (wrapperOffSetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  slideConfig() {
    if (this.slideItem && this.slideItem.children) {
      const childrenArray = [...this.slideItem.children] as HTMLElement[];
      this.slideArray = childrenArray.map((element: HTMLElement | null) => {
        if (!element) throw new Error('element não é válido');

        const position = this.slidePosition(element);
        return { element, position };
      });
    } else {
      throw new Error(
        'slideItem e slideItem.children não são válidos (ln: 155)',
      );
    }
  }

  slidesIndexNav(index: number) {
    this.lengthSlideArray = this.slideArray.length - 1;
    this.indexObject = {
      prev: index ? index - 1 : null,
      active: index,
      next: this.lengthSlideArray != index ? index + 1 : null,
    };
    return this.indexObject;
  }

  changeSlide(index: number) {
    const activeSlide = this.slideArray[index];
    this.moveSlide(activeSlide.position);
    this.slidesIndexNav(index);
    this.dist.finalPosition = activeSlide.position;
    this.changeActiveClass();
    // definindo quando o novo evento 'changeEvent' ocorrerá, ou seja, toda vez que o slide mudar o evento será ativado
    this.slideWrapper?.dispatchEvent(this.changeEvent);
  }

  changeActiveClass() {
    this.slideArray.forEach((item) => {
      item.element.classList.remove(this.activeClass);
    });
    if (this.indexObject.active) {
      this.slideArray[this.indexObject.active].element.classList.add(
        this.activeClass,
      );
    }
  }

  activePrevSlide() {
    if (this.indexObject.prev) this.changeSlide(this.indexObject.prev);
  }

  activeNextSlide() {
    if (this.indexObject.next) this.changeSlide(this.indexObject.next);
  }

  onResize() {
    setTimeout(() => {
      this.slideConfig();
      if (this.indexObject.active) this.changeSlide(this.indexObject.active);
    }, 1000);
  }

  addResizeEvent() {
    window.addEventListener('resize', this.onResize);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onResize = debounce(this.onResize.bind(this), 200);
    this.activePrevSlide = this.activePrevSlide.bind(this);
    this.activeNextSlide = this.activeNextSlide.bind(this);
  }

  init() {
    this.bindEvents();
    this.transition(true);
    this.addEventSlide();
    this.slideConfig();
    this.addResizeEvent();
    this.changeSlide(0);
    return this;
  }
}

export class SlideNav extends SlideClass {}
