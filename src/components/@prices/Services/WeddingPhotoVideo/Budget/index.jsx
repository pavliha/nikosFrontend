import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import Title from '../../common/Title'
import Price from '../../common/Price'
import Service from '../../common/Service'
import ServiceList from '../../common/ServiceList'
import ListItem from '../../common/ServiceList/ListItem'

const styles = theme => ({
  color: {
    color: theme.palette.error.main
  },
})

const Budget = ({ classes }) =>
  <Service>
    <Title>
      Пакет<br /> «<span className={classes.color}>Эконом</span>»
    </Title>
    <Price>
      6000 гр
    </Price>
    <ServiceList>
      <ListItem>Съемочный день – до банкета</ListItem>
      <ListItem>300 обработаных фотографий</ListItem>
      <ListItem>Индивидуально оформленный комплект дисков (видео в формате Full HD + фото)</ListItem>
      <ListItem>Запись Full HD видео и фото на любой другой носитель клиента</ListItem>
      <ListItem>Короткие видеоклипы "Невеста", "Прогулка"</ListItem>
    </ServiceList>
  </Service>

Budget.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Budget)
