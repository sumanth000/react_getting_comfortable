import React from 'react';
import TakeToPage from "../../templates_of_content/takeToPage/takeToPage";
import ComponentTemplate from "../../templates_of_content/component_template/componentTemplate";
import contextStyles from '../css_folder/useContext.module.css'
import { useSumanthContext } from "./useContextComponent";
import { SumanthProvider } from "./useContextComponent";

const ContentOfToCheck = () => {
    const { contextCount, setContextCount ,multiplyBy2} = useSumanthContext();

    const increaseCounter = () => {
        setContextCount(contextCount + 1);
    };

    return (
        <div>
            <TakeToPage url='/hooks' label='hooks page'></TakeToPage>
            <div>
                <ComponentTemplate label={' context data ' + contextCount}></ComponentTemplate>
                <button className={contextStyles.counter} onClick={multiplyBy2}>multiplyBy2 Counter</button>

                <button className={contextStyles.counter} onClick={increaseCounter}>Increase Counter</button>
            </div>
        </div>
    );
};

const UseContextToCheck = () => {
    return (
        <SumanthProvider>
            <ContentOfToCheck />
        </SumanthProvider>
    );
};

export default UseContextToCheck;
