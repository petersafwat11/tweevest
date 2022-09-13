import React from "react";
import Image from 'next/image';
import { Tabs } from 'antd';
import { SliderComponent } from "..";
import { LineChart } from "..";
import { BarChart } from "..";
import { ForcastComponent } from "..";


export const TabsComponent = () => {
    return (
        <div className="TabsComponent-main mb-[96px]">
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Overview" key="1">
                    <div className="TabsComponent-row flex gap-[30px] px-[75px] 2xl:flex-wrap xl:px-[15px]">
                        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
                            <SliderComponent />
                        </div>
                        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
                            <BarChart />
                        </div>
                        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
                            <LineChart />
                        </div>
                        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
                            <ForcastComponent />
                        </div>
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Chart" key="2">
                    <div className="TabsComponent-row flex gap-[30px] px-[75px] 2xl:flex-wrap xl:px-[15px]">
                        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
                            <SliderComponent />
                        </div>
                        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
                            <BarChart />
                        </div>
                        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
                            <LineChart />
                        </div>
                        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
                            <ForcastComponent />
                        </div>
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Health" key="3">
                    <div className="TabsComponent-row flex gap-[30px] px-[75px] 2xl:flex-wrap xl:px-[15px]">
                        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
                            <SliderComponent />
                        </div>
                        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
                            <BarChart />
                        </div>
                        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
                            <LineChart />
                        </div>
                        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
                            <ForcastComponent />
                        </div>
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Ownership" key="4">
                    <div className="TabsComponent-row flex gap-[30px] px-[75px] 2xl:flex-wrap xl:px-[15px]">
                        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
                            <SliderComponent />
                        </div>
                        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
                            <BarChart />
                        </div>
                        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
                            <LineChart />
                        </div>
                        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
                            <ForcastComponent />
                        </div>
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Profile" key="5">
                    <div className="TabsComponent-row flex gap-[30px] px-[75px] 2xl:flex-wrap xl:px-[15px]">
                        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
                            <SliderComponent />
                        </div>
                        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
                            <BarChart />
                        </div>
                        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
                            <LineChart />
                        </div>
                        <div className="tabComponent-box w-[23.5%] shadow-Shadow1 bg-white border-[1px] border-border-shade1 rounded-16 overflow-hidden 2xl:w-[31.5%] xl:w-[31%] lg:w-[48%] md:w-[100%]">
                            <ForcastComponent />
                        </div>
                    </div>
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}