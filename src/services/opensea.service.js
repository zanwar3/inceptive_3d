import axios from "axios";
import moment from "moment";
const getByContractAddress = async (contract_address) => {
  const result = await axios.get(
    `https://api.rarible.org/v0.1/collections/ETHEREUM:${contract_address}`
  );
  let response = result.data;
  var data = {
    name: response?.meta?.name,
    descripton: response?.meta?.description,
    creator_fee: parseInt(response?.meta?.sellerFeeBasisPoints) / 100,
    chain: response?.blockchain,
    items: response?.statistics?.itemCount,
    total_volume: parseFloat(response?.statistics?.totalVolume?.value).toFixed(
      2
    ),
    floor_price: parseFloat(response?.statistics?.floorPrice?.value).toFixed(2),
    best_offer: parseFloat(response?.bestBidOrder?.takePrice).toFixed(2),
    owners: response?.statistics?.ownerCountTotal,
    unique_owners: response?.statistics?.ownerCount,
  };

  return data;
};

const getBySlug = async (slug) => {
  const result = await axios.get(
    `https://api.opensea.io/api/v1/collection/${slug}`
  );
  let response = result.data.collection;
  var data = {
    banner_image_url: response.banner_image_url,
    name: response?.name,
    descriptons: response?.description,
    createdAt: moment(response?.created_date).format("MMM YYYY"),
    totalItems: response?.stats?.count,
    totalVolume: parseFloat(response?.stats?.total_volume),
    floorPrice: response?.stats?.floor_price,
    owners: response?.stats?.num_owners,

    // creatorFee: parseInt(response?.meta?.sellerFeeBasisPoints) / 100,
    //  chain: response?.blockchain,

    // bestOffer: response?.bestBidOrder?.takePrice,
    //  listed: null,

    // uniqueOwners: response?.statistics?.ownerCount,

    discord_url: response.discord_url,
    external_url: response.external_url,
  };

  return data;
};

// *******************************************************

const OpenseaService = { getByContractAddress, getBySlug };

export default OpenseaService;
