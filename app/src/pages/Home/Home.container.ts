import { AppState } from '../../store/rootReducer';
import { bindActionCreators, Dispatch } from 'redux';
import { RootAction } from '../../store/rootAction';
import { gameFound, joinGameQueue } from '../../store/game/game.actions';
import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = (state: AppState) => {
  const gameId = state.game.gameId;
  return {
    gameId,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators(
    {
      joinGameQueue,
      gameFound,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);

export type HomeContainerProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;