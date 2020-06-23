// src/components/my-rating-component/my-rating-component.tsx

import  { Component, Prop, State, h } from  '@stencil/core';

@Component({
    tag: 'my-rating',
    styleUrl: 'my-rating-component.css',
    shadow: true
})
export  class  MyRatingComponent  {
    @Prop({mutable: false}) maxValue: number = 5;
    value: number = 0;

    @State() starList: Array<object> = [];

    constructor() {
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

    createStarList(numberOfStars: number) {
        let starList = [];

        for (let i = 1; i <= this.maxValue; i++) {
            if (i <= numberOfStars) {
                starList.push(<span class="rating" 
                    onMouseOver={() => this.createStarList(i)} 
                    onMouseOut={() => this.createStarList(this.value)} 
                    onClick={() => this.setValue(i)}>&#x2605;</span>);
            } else {
                starList.push(<span 
                    class="rating" 
                    onMouseOver={() => this.createStarList(i)} 
                    onMouseOut={() => this.createStarList(this.value)} 
                    onClick={() => this.setValue(i)}>&#x2606;</span>);
            }
        }

        this.starList = starList;
    }

    render() {
        console.log(`rendering with value ${this.value}`);
        return  (
        <div>
            {this.starList}
        </div>
        );
    }
}