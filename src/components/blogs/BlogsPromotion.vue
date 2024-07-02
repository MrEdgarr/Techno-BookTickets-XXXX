<template>
    <div class="wrapper-content">
        <v-row class="news-list">
            <v-col cols="12" lg="3" class="list-item">
                <v-card>
                    <v-img
                        src="https://images.unsplash.com/photo-1717092068546-2069d5bcc38e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        height="200"
                        cover
                    />
                    <v-card-subtitle> 20/05/2003 </v-card-subtitle>
                    <v-card-text>
                        <h5>Super awesome, Vue 3 is coming soon!</h5>
                        <p>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="3" class="list-item">
                <v-card>
                    <v-img
                        src="https://images.unsplash.com/photo-1717128584253-de3daf336a72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        height="200"
                        cover
                    />
                    <v-card-subtitle> 20/05/2003 </v-card-subtitle>
                    <v-card-text>
                        <h5>Super awesome, Vue 3 is coming soon!</h5>
                        <p>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="3" class="list-item">
                <v-card>
                    <v-img
                        src="https://images.unsplash.com/photo-1716839358026-e857bad29a05?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        height="200"
                        cover
                    />
                    <v-card-subtitle> 20/05/2003 </v-card-subtitle>
                    <v-card-text>
                        <h5>Super awesome, Vue 3 is coming soon!</h5>
                        <p>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="3" class="list-item">
                <v-card>
                    <v-img
                        src="https://images.unsplash.com/photo-1716839358026-e857bad29a05?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        height="200"
                        cover
                    />
                    <v-card-subtitle> 20/05/2003 </v-card-subtitle>
                    <v-card-text>
                        <h5>Super awesome, Vue 3 is coming soon!</h5>
                        <p>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="3" class="list-item">
                <v-card>
                    <v-img
                        src="https://images.unsplash.com/photo-1716839358026-e857bad29a05?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        height="200"
                        cover
                    />
                    <v-card-subtitle> 20/05/2003 </v-card-subtitle>
                    <v-card-text>
                        <h5>Super awesome, Vue 3 is coming soon!</h5>
                        <p>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="3" class="list-item">
                <v-card>
                    <v-img
                        src="https://images.unsplash.com/photo-1716839358026-e857bad29a05?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        height="200"
                        cover
                    />
                    <v-card-subtitle> 20/05/2003 </v-card-subtitle>
                    <v-card-text>
                        <h5>Super awesome, Vue 3 is coming soon!</h5>
                        <p>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="3" class="list-item">
                <v-card>
                    <v-img
                        src="https://images.unsplash.com/photo-1716839358026-e857bad29a05?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        height="200"
                        cover
                    />
                    <v-card-subtitle> 20/05/2003 </v-card-subtitle>
                    <v-card-text>
                        <h5>Super awesome, Vue 3 is coming soon!</h5>
                        <p>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <div class="text-center mt-10">
            <v-pagination
                v-model="page"
                :length="4"
                rounded="circle"
            ></v-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            page: 1,
        };
    },
};
</script>
<style lang=""></style>
