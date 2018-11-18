import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import PropTypes from 'prop-types';
import cat1 from '../resources/cat1.jpg';
import cat2 from '../resources/cat2.jpg';
import cat3 from '../resources/cat3.jpg';
import cat4 from '../resources/cat4.jpg';
import cat5 from '../resources/cat5.jpg';
import cat6 from '../resources/cat6.jpg';
import cat7 from '../resources/cat7.jpg';
import '../stylesheets/carousel.css';
const items = [
    {
      src: cat1,
       altText: 'Cat 1',
      caption: 'Landscape'
    },
    {
      src: cat2,
       altText: 'Cat 2',
      caption: 'Wedding'
    },
    {
      src: cat3,
       altText: 'Cat 3',
      caption: 'Formal'
    },
    {
      src: cat4,
       altText: 'Cat 4',
      caption: 'Wildlife'
    },
    {
      src: cat5,
       altText: 'Cat 5',
      caption: 'Birthday'
    },
    {
      src: cat6,
       altText: 'Cat 6',
      caption: 'Motion and Action'
    },
    {
      src: cat7,
       altText: 'Cat 7',
      caption: 'Sports'
    }
  ];


  class  Customcarousel extends Component{

    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        }
    
        onExiting() {
        this.animating = true;
        }
    
        onExited() {
        this.animating = false;
        }
    
        next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
        }
    
        previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
        }
    
        goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
        }
        
        render() {
            const { activeIndex } = this.state;
        
            const slides = items.map((item) => {
              return (
                <CarouselItem
                    className="carousel-item"
                  onExiting={this.onExiting}
                  onExited={this.onExited}
                  key={item.src}
                  
                >
                  <img className="d-block " src={item.src} alt={item.altText} />
                  <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
                  
              );
            });
        
            return (
              <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
              >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
              </Carousel>
              
            );
          }
        }
        Carousel.propTypes = {
            // the current active slide of the carousel
            activeIndex: PropTypes.number,
            // a function which should advance the carousel to the next slide (via activeIndex)
            next: PropTypes.func.isRequired,
            // a function which should advance the carousel to the previous slide (via activeIndex)
            previous: PropTypes.func.isRequired,
            // controls if the left and right arrow keys should control the carousel
            keyboard: PropTypes.bool,
            /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
             * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
             */
            pause: PropTypes.oneOf(['hover', false]),
            // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
            // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
            ride: PropTypes.oneOf(['carousel']),
            // the interval at which the carousel automatically cycles (default: 5000)
            interval: PropTypes.oneOfType([
              PropTypes.number,
              PropTypes.string,
              PropTypes.bool,
            ]),
            children: PropTypes.array,
            // called when the mouse enters the Carousel
            mouseEnter: PropTypes.func,
            // called when the mouse exits the Carousel
            mouseLeave: PropTypes.func,
            // controls whether the slide animation on the Carousel works or not
            slide: PropTypes.bool,
            cssModule: PropTypes.object,
          };

          CarouselItem.propTypes = {
            tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            in: PropTypes.bool,
            cssModule: PropTypes.object,
            children: PropTypes.node,
            slide: PropTypes.bool,
          };

          CarouselControl.propTypes = {
            direction: PropTypes.oneOf(['prev', 'next']).isRequired,
            onClickHandler: PropTypes.func.isRequired,
            cssModule: PropTypes.object,
            directionText: PropTypes.string
          };
          CarouselIndicators.propTypes = {
            items: PropTypes.array.isRequired,
            activeIndex: PropTypes.number.isRequired,
            cssModule: PropTypes.object,
            onClickHandler: PropTypes.func.isRequired
          };
          CarouselCaption.propTypes = {
            captionHeader: PropTypes.string,
            captionText: PropTypes.string.isRequired,
            cssModule: PropTypes.object
          };

        
        export default Customcarousel;
