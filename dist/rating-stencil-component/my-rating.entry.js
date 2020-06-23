import { r as registerInstance, h } from './index-61243d7a.js';

const myRatingComponentCss = ".rating{color:orange}";

const MyRatingComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.maxValue = 5;
        this.value = 0;
        this.starList = [];
        console.log(`BEGIN: constructor value: ${this.value}; max-value: ${this.maxValue}`);
        // this.createStarList(this.value); // <- this doesn't work
        console.log(`END: constructor `);
    }
    /**
        BEGIN: componentWillLoad
        END: componentWillLoad
        
        BEGIN: componentWillRender
        END: componentWillRender
        
        BEGIN: componentDidRender
        END: componentDidRender
        
        BEGIN: componentDidLoad
        END: componentDidLoad
     */
    componentWillLoad() {
        console.log("BEGIN: componentWillLoad");
        this.createStarList(this.value);
        console.log("END: componentWillLoad");
    }
    componentDidLoad() {
        console.log("BEGIN: componentDidLoad");
        console.log("END: componentDidLoad");
    }
    componentWillUpdate() {
        console.log("BEGIN: componentWillUpdate");
        console.log("END: componentWillUpdate");
    }
    componentWillRender() {
        console.log("BEGIN: componentWillRender");
        console.log("END: componentWillRender");
    }
    componentDidRender() {
        console.log("BEGIN: componentDidRender");
        console.log("END: componentDidRender");
    }
    componentDidUpdate() {
        console.log("BEGIN: componentDidUpdate");
        console.log("END: componentDidUpdate");
    }
    componentDidUnload() {
        console.log("BEGIN: componentDidUnload");
        console.log("END: componentDidUnload");
    }
    setValue(newValue) {
        console.log("BEGIN: setValue");
        this.value = newValue;
        // this.createStarList(this.value);
        console.log("END: setValue");
    }
    createStarList(numberOfStars) {
        let starList = [];
        for (let i = 1; i <= this.maxValue; i++) {
            if (i <= numberOfStars) {
                starList.push(h("span", { class: "rating", onMouseOver: () => this.createStarList(i), onMouseOut: () => this.createStarList(this.value), onClick: () => this.setValue(i) }, "\u2605"));
            }
            else {
                starList.push(h("span", { class: "rating", onMouseOver: () => this.createStarList(i), onMouseOut: () => this.createStarList(this.value), onClick: () => this.setValue(i) }, "\u2606"));
            }
        }
        this.starList = starList;
    }
    render() {
        console.log(`rendering with value ${this.value}`);
        return (h("div", null, this.starList));
    }
};
MyRatingComponent.style = myRatingComponentCss;

export { MyRatingComponent as my_rating };
