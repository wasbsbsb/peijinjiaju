import React from 'react'

export default class Lianxi extends React.Component {
    state = {
        user: [{
            name: '广州沛瑾家具有限公司'
        }, {
            name: '公司地址：广东省广州市天河区沐陂工业园15号楼3层'
        }, {
            name: '联系人:徐小姐 　18122255285'

        }, {
            name: '1、免费上门测量，2、免费提供设计图纸，3、免费送货上门，4、厂价直销，5、质量保修五年！'

        }],
    }

    render() {
        return (
            <div>
                <div style={{
                    background: '#272727',
                    height: '1.4rem'
                }}>
                    <div style={{
                        color: '#fff',
                        float: 'right',
                        fontWeight:'bold',
                        fontFamily: 'verdana',
                        cursor: 'pointer',
                        lineHeight: '1.4rem',
                        fontSize: '.7rem'
                    }}>
                        Top
                    </div>
                </div>
                <div style={
                    {
                        background: 'rgba(0,0,0,.2)',
                        padding: '.8rem 0',
                    }
                }>
                    {
                        this.state.user.map((itmes, index) => {
                            return (
                                <p style={{
                                    textAlign: 'center',
                                    fontSize: '.6rem',
                                    fontFamily: 'Arial',
                                    color: '#333',
                                    margin: '6px'

                                }} key={index}>
                                    {
                                        itmes.name
                                    }
                                </p>
                            )
                        })
                    }
                </div>
            </div>

        )
    }
}