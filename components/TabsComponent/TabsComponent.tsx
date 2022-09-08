import React from "react";
import Image from 'next/image';
import { Tabs } from 'antd';
import SliderComponent from "../SliderComponent/SliderComponent";

const TabsComponent = () => {
    return (
        <div className="TabsComponent-main mb-[96px]">
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Overview" key="1">
                    <div className="TabsComponent-row flex gap-[30px] px-[75px]">
                        <div className="tabComponent-box w-[25%] shadow-Shadow1">
                            <SliderComponent />
                        </div>
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Chart" key="2">
                    <div className="TabsComponent-row flex gap-[30px] px-[75px]">
                        <div className="tabComponent-box w-[25%] shadow-Shadow1">
                            <SliderComponent />
                        </div>
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Health" key="3">
                    <div className="TabsComponent-row flex gap-[30px] px-[75px]">
                        <div className="tabComponent-box w-[25%] shadow-Shadow1">
                            <SliderComponent />
                        </div>
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Ownership" key="4">
                    <div className="TabsComponent-row flex gap-[30px] px-[75px]">
                        <div className="tabComponent-box w-[25%] shadow-Shadow1">
                            <SliderComponent />
                        </div>
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Profile" key="5">
                    <div className="TabsComponent-row flex gap-[30px] px-[75px]">
                        <div className="tabComponent-box w-[25%] shadow-Shadow1">
                            <SliderComponent />
                        </div>
                    </div>
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}

export default TabsComponent