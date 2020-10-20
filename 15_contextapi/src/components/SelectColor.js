import React, {Component} from 'react';
import ColorContext from '../contexts/color'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
class SelectColors extends Component{
    static contextType = ColorContext;
    handleSetColor = color => {
        this.context.actions.setColor(color);
    };  
    handleSetSubColor = subcolor => {
        this.context.actions.setSubcolor(subcolor);
    };

    render(){
        return(
            <div>
                <h2>색상을 선택하세요</h2>
                    <div style = {{display : 'flex'}}>
                            {colors.map(color => (
                                <div
                                    key = {color}
                                    style = {{
                                        background : color,
                                        width : '24px',
                                        height : '24px',
                                        cursor : 'pointer'
                                    }}
                                    onClick = { () => {this.handleSetColor(color)}}
                                    onContextMenu = {e => { // 오른쪽 클릭 매뉴
                                        e.preventDefault(); // 마우스 오른쪽 클릭시 메뉴가 뜨는 거를 무시함
                                        this.handleSetSubColor(color);
                                    }}
                                /> 
                            ))}
                        </div>
                <hr />
            </div>
        )
    }
}

export default SelectColors;