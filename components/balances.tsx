"use client";

import { ChainKeys, PulsarSDK, TierKeys } from "pulsar_sdk_js";
import { useEffect } from "react";

const API_KEY = process.env.NEXT_PUBLIC_PULSAR_API ?? '';
const sdk = new PulsarSDK(API_KEY)

const responsesList: unknown[] = []
const timeSeriesList: unknown[] = []

const Balances = () => {
    const getWalletBalances = async () => {
        for await (const response of sdk.balances.getWalletBalances(
            'osmo1cedfdergrqt686qaw86tqkr9wjp9h209cyms9m',
            ChainKeys.OSMOSIS
        )) {
            responsesList.push(response)
        }

        console.log(responsesList);
    }

    const getWalletTimeseries = async () => {
        for await (const response of sdk.balances.getWalletTimeseries(
            'osmo1cedfdergrqt686qaw86tqkr9wjp9h209cyms9m',
            ChainKeys.OSMOSIS,
            TierKeys.ONE_DAY
        )) {
            timeSeriesList.push(response)
        }

        console.log(timeSeriesList);
    }

    useEffect(() => {
        getWalletBalances();
        getWalletTimeseries();
    }, [])

    return <section>
        Hello
    </section>
}

export default Balances