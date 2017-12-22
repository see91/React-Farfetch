import React, {Component} from 'react';
import {connect} from 'react-redux'
import actions from '../../store/action/list';
import MHeader from '../../pubComponents/MHeader'
import './index.less'
import {Link} from 'react-router-dom'
import ListHeader from './ListHeader'

class List extends Component {
    constructor() {
        super();
        this.state = {
            star: true,
            list: null,
            type: 'coat',
            offset: 0
        };
    }


    componentDidMount() {
        let initCls = {type: this.state.type, offset: this.state.offset};
        this.props.getDatas(initCls);
        this.setState({list: this.props.getList})
    }


    collection = (event) => {
        event.target.star = !event.target.star;
        event.target.className = event.target.star ? 'iconfont icon-gray-star active' : 'iconfont icon-gray-star';
        event.preventDefault();
    };


    chooseList = (type) => {
        setTimeout(() => {
            this.setState({type})
            let newCls = {type: this.state.type, offset: this.state.offset};
            this.props.getDatas(newCls);
        }, 500)
    }

    render() {
        let arr = [];
        let prdList = this.props.list.getList.prdList;
        for (let i in prdList) {
            arr.push(prdList[i]);
        }
        console.log(arr);
        return (
            <div>
                <MHeader title={{title: '列表页'}}/>
                <div className="contents">
                    <ListHeader
                        chooseList={this.chooseList}
                    />
                    <div className="container">
                        <h3>SALE|近4000件商品现有4折优惠</h3>
                        <div className="list-group">
                            {
                                arr.map((item, index) => (
                                    <Link key={item.id} to={{pathname: `/detail/${item.id}`, state: {item}}}>
                                        <div className='iconfont icon-gray-star ' onClick={this.collection}></div>
                                        <img src={item.url}/>
                                        <p>{item.title}</p>
                                        <b>￥{item.price}</b>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        {
                            this.props.list.getList.hasMore ?
                                <div className="load-more">
                                    加载更多
                                </div> : <div className="load-more">
                                    别扯了，到底了
                                </div>
                        }
                    </div>
                </div>

            </div>

        )
    }
}

export default connect(
    state => state,
    actions
)(List)