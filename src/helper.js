export default class DistrictRepository {
  constructor(data) {
    this.stats = this.filterData(data);
  }

  filterData = (data) => {
    const newData = data.reduce((acc, district) => {
      const roundedNum = isNaN(district.Data) ? 0 : parseFloat(parseFloat(district.Data).toFixed(3).toString())
      if (!acc[district.Location]) {
        acc[district.Location.toUpperCase()] = {
          location: district.Location.toUpperCase(),
          stats: {[district.TimeFrame]: roundedNum}
        }
      } else {
        acc[district.Location].stats = Object.assign(acc[district.Location].stats, {[district.TimeFrame]: roundedNum})
      }
      return acc;
    }, {})
    return newData;
  }

  findByName = (name) => {
    let locations = Object.keys(this.stats)

    if (name) {
      return this.stats[name.toUpperCase()]
    }
  }

  findAllMatches = (districts) => {
    const districtNames = Object.keys(this.stats)
    if (districts) {
      return districtNames.filter((district) => {
        return district.toUpperCase().includes(districts.toUpperCase())
      })
    } else {
      return districtNames;
    }
  }
}
